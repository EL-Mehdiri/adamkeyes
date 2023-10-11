import * as yup from 'yup'

const Schema = yup.object().shape({
    name: yup.string().required('required'),
    email: yup.string().email('Sorry, invalid format here').required(),
    message: yup.string().required('required'),
})

export default Schema