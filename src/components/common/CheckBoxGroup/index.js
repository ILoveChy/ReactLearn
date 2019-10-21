import React, { Component } from 'react'
import types from '../../../utils/commonTypes'
import PropTypes from 'prop-types'

/**
 * 一组多选框
 */
export default class CheckBoxGroup extends Component {
    /** 
     * 默认属性值
     */
    static defaulProps = {
        datas: [],
        chooseDatas: [],
    }
    /** 
     * 属性验证
     */
    static propTypes = {
        datas: types.groupDatas.isRequired,
        name: PropTypes.string.isRequired,
        chooseDatas: types.chooseDatas,
        onChange: PropTypes.func
    }

    handleChange = e => {
        let newArr;
        if (e.target.checked) {
            newArr = [...this.props.chooseDatas, e.target.value]
        } else {
            newArr = this.props.chooseDatas.filter(it => it !== e.target.value)
        }
        this.props.onChange && this.props.onChange(newArr, this.props.name, e);
    }

    /**
     * 得到一组多选框
     */
    getCheckBoxes() {
        return this.props.datas.map(item => (
            <label key={item.value}>
                <input
                    type="checkbox"
                    name={this.props.name}
                    value={item.value}
                    checked={this.props.chooseDatas.includes(item.value)}
                    onChange={this.handleChange}
                />
                {item.text}
            </label>
        ))
    }

    render() {
        const bs = this.getCheckBoxes();
        return (
            <div>
                {bs}
            </div>
        )
    }
}
