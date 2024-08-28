<template>
  <div class="container col-lg-8 col-xl-7 mt-5">
    <div class="text-center">
      <h1>Contact Me</h1>
      <div class="divider col-1"></div>
      <h6>Thank you for deciding to contact me. Please fill out the form below and I will get back to you at the entered
        email address as soon as I can.</h6>
    </div>

    <form @submit.prevent="sendEmail">
      <div class="my-4">
        <div class="row">
          <div class="col-12 col-xl-5">
            <div class="row">
              <div class="mb-4 col-xl-12 col-md-6">
                <input type="text" name="name" v-model="name" class="form-control" placeholder="Your Name :" required>
              </div>
              <div class="mb-4 col-xl-12 col-md-6">
                <input type="email" name="email" v-model="email" class="form-control" placeholder="Email Address :" required>
              </div>
            </div>

            <div class="mb-4">
              <input type="text" name="subject" v-model="subject" class="form-control" placeholder="Message Subject :" required>
            </div>
          </div>
          <div class="mb-4 col-xl-7">
            <textarea class="form-control" name="message" v-model="message" rows="6" placeholder="Your Message :" required></textarea>
          </div>
        </div>
        <div class="mb-5 d-flex flex-row-reverse">
          <button type="submit" class="btn btn-main " ref="sendMessage">Send Message</button>
        </div>
        <pre class="d-none">{{ response }}</pre>
      </div>
      <NuxtTurnstile v-model="token" class="mb-5"/>
    </form>
  </div>
  
  

</template>
<script setup>
  const mail = useMail()
  const token = ref()
  const response = ref()
  
  const name = ref()
  const email = ref()
  const subject = ref()
  const message = ref()

  const sendMessage = ref(null)

  async function sendEmail() {
    response.value = await $fetch('/api/submit',  {
      method: 'POST',
      body: {
        token: token.value
      }
    })
    if(response.value["success"]) {
      mail.send({
        from: email.value,
        subject: '< NEW MESSAGE FROM PORTFOLIO >',
        text: '< NAME: ' + name.value + ' >  < EMAIL: ' + email.value + ' >\nSUBJECT: ' + subject.value + '\nMESSAGE: ' + message.value,
      })
      setTimeout(() => {
        name.value = "",
        email.value = "",
        subject.value = "",
        message.value = "",
        
        sendMessage.value.innerText = "Message Sent!",
        sendMessage.value.disabled = true
      }, 5)
      
    }

  }

  useHead({
    title: 'Bryson Frost | Contact'
  })
</script>