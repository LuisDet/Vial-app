const app = require('express')()
const { json, urlencoded } = require('express')
// const nodemailer = require('nodemailer')

module.exports = { path: '/api', handler: app }

app.use(json())
app.use(urlencoded({ extended: false }))

app.post('/message', (req, res) => {
  console.log(req.body)
  //   const contenuFormulaireContact = `
  //    <ul>
  //      <li>Nom : ${req.body.name}</li>
  //      <li>Prénom : ${req.body.firstname}</li>
  //    </ul>
  //  `
  //   // NODEMAILER
  //   const transporter = nodemailer.createTransport({
  //     host: '',
  //     port: 465,
  //     secure: true,
  //     auth: {
  //       user: '',
  //       pass: '',
  //     },
  //   })

  //   const info = await transporter.sendMail({
  //     from: '"Website\'s Name" <hello@website.com>', // sender address
  //     to: 'myemail@website.com', // list of receivers
  //     subject: `NEW MESSAGE : ${req.body.subject}`, // Subject line
  //     text: '', // plain text body
  //     html: contenuFormulaireContact, // html body
  //   })

  //   console.log('Message sent: %s', info.messageId)
  //   console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))

  res.redirect(200, '/contact')
})
