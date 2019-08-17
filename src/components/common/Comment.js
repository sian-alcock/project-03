import React from 'react'
import Auth from '../../lib/Auth'


const Comment = ({ user, createdAt, content, _id, handleDeleteComment }) => {
  console.log(user)
  return (
    <article className="media">
      <div className="media-content">
        <div className="content">
          <p>
            <strong>{user.username}</strong>
            {' '}
            <small>{(new Date(createdAt)).toLocaleDateString()}</small>
            <br />
            {content}
          </p>
        </div>
      </div>
      {Auth.isAuthenticated() && <div className="media-right">
        <button className="delete" id={_id} onClick= {handleDeleteComment}></button>
      </div>}
    </article>
  )
}

export default Comment
