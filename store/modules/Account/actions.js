import Cookie from 'js-cookie'
import {
  SET_AUTH,
  SET_ACCOUNT,
  SET_ACCOUNTS,
  PUSH_ACCOUNTS,
  SPLICE_ACCOUNTS
} from './mutations'

const actions = {
  async getAllaccounts(context, payload) {
    await this.$axios
      .get('accounts', { params: { filter: payload.filter } })
      .then(response => context.commit(SET_ACCOUNTS, response.data))
  },
  async loginAccount(context, payload) {
    await this.$axios.post('accounts/login', payload.content).then(response => {
      context.commit(SET_AUTH, true)
      Cookie.set('accessToken', response.data.id)
      Cookie.set('userId', response.data.userId)
    })
  },
  logoutAccount(context) {
    Cookie.remove('accessToken')
    context.commit(SET_ACCOUNT, null)
  },
  async changePasswordAccount(context, payload) {
    await this.$axios
      .put('accounts/change-password', payload.content)
      .then(response => {})
  },
  async createAccount(context, payload) {
    await this.$axios.post('accounts', payload.content).then(response => {
      context.commit(PUSH_ACCOUNTS, response.data)
    })
  },
  async updateAccount(context, payload) {
    await this.$axios.put(`accounts/${payload.content.id}`, payload.content)
  },
  async deleteAccount(context, payload) {
    await this.$axios
      .delete(`accounts/${payload.content.id}`)
      .then(response => {
        context.commit(SPLICE_ACCOUNTS, payload.content)
      })
  }
}

export default actions
