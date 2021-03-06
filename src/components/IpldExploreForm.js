import React from 'react'
import { connect } from 'redux-bundler-react'
import StrokeIpld from '../icons/StrokeIpld'

function ensureLeadingSlash (str) {
  if (str.startsWith('/')) return str
  return `/${str}`
}

class IpldExploreForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      path: ''
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit (evt) {
    evt.preventDefault()
    const {path} = this.state
    const hash = path ? `#/explore${ensureLeadingSlash(path)}` : `#/explore`
    this.props.doUpdateHash(hash)
  }

  onChange (evt) {
    const path = evt.target.value
    this.setState({
      path
    })
  }

  render () {
    return (
      <form data-id='IpldExploreForm' className='black-80 dt dt--fixed' style={{maxWidth: 560}} onSubmit={this.onSubmit}>
        <div className='dtc v-top'>
          <div className='relative'>
            <input id='ipfs-path' className='input-reset bn pa2 mb2 db w-100 f6 br-0 placeholder-light focus-outline' style={{borderRadius: '3px 0 0 3px'}} type='text' placeholder='QmHash' aria-describedby='name-desc' onChange={this.onChange} value={this.state.path} />
            <small id='ipfs-path-desc' className='o-0 absolute f6 black-60 db mb2'>Paste in a CID or IPFS path</small>
          </div>
        </div>
        <div className='dtc v-top' style={{width: 100}}>
          <button
            type='submit'
            className='button-reset dib lh-copy pv1 pl2 pr3 ba f7 fw4 focus-outline white bg-aqua bn'
            style={{borderRadius: '0 3px 3px 0'}}>
            <StrokeIpld style={{height: 24}} className='dib fill-current-color v-mid' />
            <span className='ml2'>Explore</span>
          </button>
        </div>
      </form>
    )
  }
}

export default connect('doUpdateHash', IpldExploreForm)
