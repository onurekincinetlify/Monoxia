
import { watch, ref } from 'vue';

export const mailData = ref('')
export const passwordData = ref('')

export const anyIssueInMail = ref(true)
export const anyIssueInPassword = ref(true)

export const mailHiddenTips = ref(false)
export const passwordHiddenTips = ref(false)

export function isEmailCorrect() {

    watch(() => mailData.value, (newValue, oldValue) => {
        const email = newValue.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(email)) {
            anyIssueInMail.value = false
            mailHiddenTips.value = false
        } else {
            anyIssueInMail.value = true
        }
    })
}

export function changeStatus() {

    watch(() => passwordData.value, (newValue, oldValue) => {
        if (newValue.length >= 8) {
            anyIssueInPassword.value = false
            passwordHiddenTips.value = false  
        } else {
            anyIssueInPassword.value = true
        }
    })
}

export const variables = {
  mailData,
  passwordData,
  anyIssueInMail,
  anyIssueInPassword,
  mailHiddenTips,
  passwordHiddenTips
};