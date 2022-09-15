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
  }),
  getters: {
    inboxMails(state){
      return state.emails.filter(email => email.category === 'INBOX')
    },
    archivedMails(state){
      return state.emails.filter(email => email.category === 'ARCHIVED')
    },
  },
})
