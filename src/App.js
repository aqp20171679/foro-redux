import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Col, Row} from 'react-bootstrap'
import { connect } from "redux-zero/react";
import {deleteComment, addComment} from './actions' 

const App = ({comments}) => {
  const commentsUsers = comments.map((commentUser, index)=>{
    return (
      <li key={index}><Row>
          <Col md={2}>
            <img className='avatar' src={commentUser.avatar}/>
          </Col>
          <Col md={10}>
            <p className='mg-0'><b>{commentUser.name}</b></p><hr className='bar'/><p>{commentUser.comment}</p>
            <button className='btn' onClick={()=>deleteComment(index)}>Delete</button>
          </Col>
      </Row></li>
    );
  });
  return(
    <div className='container-fluid bg-blue big-font'>
      <div className='container-group'>
        <div className="bg-light-blue content-form">
          <form onSubmit={(e)=> {
            e.preventDefault();
            addComment(this.nameInputRef.value,this.commentInputRef.value);
          }}>
          <h3 className='text-left c-blue'> NEW COMMENT </h3>
            <input type="text" name="name" placeholder="Add name" ref={(e) => this.nameInputRef = e}/><br/>
            <input type="text" name="comment" placeholder="Add comments" ref={(e) => this.commentInputRef = e}/><br/>
            <button className='btn bg-light-yellow c-blue' type="submit" name="submit" value="submit"><b>POST COMMENT</b></button>
          </form>
        </div>
        <div>
          <h4>COMMENTS</h4>
          <p className="contador">{comments.length} Comments:</p>
          <ul>{commentsUsers}</ul>
        </div>
      </div>
    </div>
    );
}


const mapToProps = ({ comments }) => ({ comments });

export default connect(mapToProps)(App);