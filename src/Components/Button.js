import React, { PureComponent } from 'react'
import classnames from 'classnames'
import Fielded from './Fielded'

export default class Button extends PureComponent {
  render () {
    const {
      children,
      fielded,
      loading,
      primary,
      success,
      info,
      link,
      warning,
      danger,
      outlined,
      inverted,
      rounded,
      hovered,
      focused,
      active,
      icon,
      ...otherProps
    } = this.props

    const className = classnames({
      'button': 1,
      'is-loading': loading,
      'is-primary': primary,
      'is-success': success,
      'is-info': info,
      'is-link': link,
      'is-warning': warning,
      'is-danger': danger,
      'is-outlined': outlined,
      'is-inverted': inverted,
      'is-rounded': rounded,
      'is-hovered': hovered,
      'is-focused': focused,
      'is-active': active
    })

    return (
      <Fielded fielded={fielded}>
        <button className={className} {...otherProps}>
          {!!icon && <span className="icon is-small"><i className={`fa fa-${icon}`}></i></span>}
          {children}
        </button>
      </Fielded>
    )
  }
}
