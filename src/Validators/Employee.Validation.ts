// use vine js for employee Validation
import vine from '@vinejs/vine'

const Employeeschema = vine.object({
  username: vine.string(),
  email: vine.string().email(),
  password: vine
    .string()
    .minLength(8)
    .maxLength(32)
    .confirmed()
})