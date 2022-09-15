import { defineStore } from 'pinia'

// interface Email {
//     id: Number,
//     isRead: Boolean,
//     subject: String,
//     body: String,
//     category: String
// }
export const useEmailStore = defineStore('emails', {
  state: () => ({
    /** @type {{ id: number, isRead: boolean, subject: string, body: string, category: string }[]} */
    emails: [
      {
        id: 1,
        isRead: false,
        subject: 'Your 7-figure plan goes bye-bye at midnight',
        body: 'Lorem ipsum is simply dummy text',
        category: 'INBOX'
      },
      {
        id: 2,
        isRead: false,
        subject: '[Weekend only] get this now',
        body: 'Lorem ipsum is simply dummy text',
        category: 'INBOX'
      },
      {
        id: 3,
        isRead: true,
        subject: 'Uh oh your prescription',
        body: 'Lorem ipsum is simply dummy text',
        category: 'INBOX'
      },
    ],
    /** @type {?{ id: number, isRead: boolean, subject: string, body: string, category: string }} */
    reading: null,
    viewer: false,
    readerTimeout: null,
  }),
  getters: {
    inboxMails(state){
      return state.emails.filter(email => email.category === 'INBOX')
    },
    archivedMails(state){
      return state.emails.filter(email => email.category === 'ARCHIVED')
    },
  },
  actions: {
    /** @param {number} id */
    markAsRead(id){
      const mail = this.emails.find(mail => mail.id === id)
      if (mail === undefined) return;
      mail.isRead = true

    },
    /** @param {number} id */
    toggleAsArchive(id){
      const mail = this.emails.find(mail => mail.id === id)
      console.log(mail)
      if (mail === undefined) return;
      mail.category = mail.category === 'INBOX' ? 'ARCHIVED' : 'INBOX'
    },
    /** @param {{ id: number, isRead: boolean, subject: string, body: string, category: string }} mail */
    readMail(mail){
      clearTimeout(this.readerTimeout)
      this.reading = mail
      this.viewer = true
    },
    closeReader(){
      this.viewer = false
      this.readerTimeout = setTimeout(()=>{
        this.reading = null
      }, 10000);
    }

  }
})