<!-- *** Mutations *** -->
<!-- Create a comment thread -->
mutation CreateACommentThread(
  $threadType: String
  $threadId: ID
  $commentText: String
) {
  createACommentThread(
    threadType: $threadType
    threadId: $threadId
    commentText: $commentText
  ) {
    commentUserId
    commentUserName
    createdAt
    _id
    commentText
    createdAt
  }
}

<!-- Variables -->
<!-- threadType is in the typeDef mutation only, it is not a field in the schema, the if statement in the resolver will detect which Model to update with the comment thread -->
{ 
  "threadType": "Meals",
  "threadId": "61d1156b9672553b988bcb3f",
  "commentText": "Nice Meal Bro!"
}

<!-- Edit Comment -->
mutation EditAComment(
  $commentId: ID
  $commentUserId: ID
  $commentText: String
) {
  editAComment(
    commentId: $commentId
    commentUserId: $commentUserId
    commentText: $commentText
  ) {
    commentUserId
    commentUserName
    createdAt
    _id
    commentText
  }
}


<!-- edit comment arguments -->
{
  "commentId": "61a7feb04359c16fe2fd77b1",
  "commentUser_id": "61a7dfbd6aedb30b51a27f3e",
  "commentText": "sup nurd? You're a mega geek!"
}

<!-- Delete all my comments and all user replies -->
mutation DeleteAllCommentsAndAllUserReplies {
  deleteAllCommentsAndAllUserReplies {
  commentUserId
  commentUserName
  createdAt
  _id
  commentText
    userReplies {
      commentId
      commentUserId
      replyUserId
      replyUserName
      createdAt
      _id
      replyText
    }
  }
}

<!-- Delete my comment and all user replies -->
mutation DeleteACommentAndAllUserReplies($commentId: ID, $commentUserId: ID) {
  deleteACommentAndAllUserReplies(
    commentId: $commentId
    commentUserId: $commentUserId
  ) {
    commentUserId
    commentUserName
    createdAt
    _id
    commentText
    userReplies {
      commentId
      commentUserId
      replyUserId
      replyUserName
      createdAt
      _id
      replyText
    }
  }
}

<!-- Create a reply to a comment -->
mutation CreateAReplyToAComment(
  $commentId: ID
  $replyUserId: ID
  $replyUserName: String
  $replyText: String
) {
  createAReplyToAComment(
    commentId: $commentId
    replyUserId: $replyUserId
    replyUserName: $replyUserName
    replyText: $replyText
  ) {
    threadId
    commentUserId
    commentUserName
    createdAt
    _id
    commentText
    userRepliesSchema {
      commentUserId
      replyUserId
      replyUserName
      createdAt
      _id
      replyText
    }
  }
}

<!-- delete a comment arguments -->
{
  "commentId": "61a808cd23a501dc6a701afc",
  "commentUserId": "61a7dfbd6aedb30b51a27f3e"
}

<!-- *** Queries *** -->
<!-- Qeury all my comments -->
query ViewAllMyComments {
  viewAllMyComments {
    threadId
    commentUserId
    commentUserName
    createdAt
    _id
    commentText
    userReplies {
      threadId
      commentId
      commentUserId
      replyUserId
      replyUserName
      createdAt
      _id
      replyText
    }
    userRepliesSchema {
      commentUserId
      replyUserId
      replyUserName
      replyText
    }
  }
}
}

<!-- Query all comments -->
query ViewAllComments {
  viewAllComments {
    threadId
    commentUserId
    commentUserName
    createdAt
    _id
    commentText
    userReplies {
      threadId
      commentId
      commentUserId
      replyUserId
      replyUserName
      createdAt
      _id
      replyText
    }
    userRepliesSchema {
      commentUserId
      replyUserId
      replyUserName
      replyText
    }
  }
}

<!-- Query comment by _id -->
query ViewASingleComment($commentId: ID) {
  viewASingleComment(commentId: $commentId) {
    commentUserId
    commentUserName
    createdAt
    _id
    commentText
    userReplies {
      commentId
      commentUserId
      replyUserId
      replyUserName
      createdAt
      _id
      replyText
    }
  }
}

