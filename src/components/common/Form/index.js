import React, { Component } from 'react'
import { Provider } from './formContext'
import FormInput from './FormInput'
import FormButton from './FormButton'
import PropTypes from 'prop-types'

export default class Form extends Component {
    state = {
        formData: {},
        changeFormData: (name, val) => {
            this.setState({
                formData: {
                    ...this.state.formData,
                    [name]: val
                }
            })
        },
        submit: () => {
            this.props.onSubmit && this.props.onSubmit(this.state.formData)
        }  //表单数据对象
    }

    static propTypes = {
        onSubmit: PropTypes.func
    }
    render() {
        return (
            <div>
                <Provider value={this.state}>
                    {this.props.children}
                </Provider>
            </div>
        )
    }
}
Form.Input = FormInput
Form.Button = FormButton