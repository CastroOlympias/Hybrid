<!-- *** Mutations *** -->
<!-- Create a reply -->
mutation createAReply(
  $threadId: ID
  $commentId: ID
  $commentUserId: ID
  $replyUserId: ID
  $replyUserName: String
  $replyText: String
) {
  createAReply(
    threadId: $threadId
    commentId: $commentId
    commentUserId: $commentUserId
    replyUserId: $replyUserId
    replyUserName: $replyUserName
    replyText: $replyText
  ) {
    threadId
    commentUserId
    commentId
    replyUserId
    replyUserName
    createdAt
    _id
    replyText
  }
}

<!-- Edit a reply -->
mutation EditAReply(
  $replyId: ID
  $editAReplyReplyUserId2: ID
  $editAReplyReplyText2: String
) {
  editAReply(
    replyId: $replyId
    replyUserId: $editAReplyReplyUserId2
    replyText: $editAReplyReplyText2
  ) {
    commentId
    commentUserId
    replyUserId
    createdAt
    _id
    replyUserName
    replyText
  }
}

<!-- delete all user's replies assocated with the comment -->
mutation DeleteAllReplies($replyUserId: ID) {
  deleteAllReplies(replyUserId: $replyUserId) {
    commentId
    replyUserId
    replyUserName
    createdAt
    _id
    replyText
  }
}

<!-- delete a reply -->
mutation DeleteAReply($replyId: ID, $replyUserId: ID) {
  deleteAReply(replyId: $replyId, replyUserId: $replyUserId) {
    commentId
    replyUserId
    replyUserName
    createdAt
    _id
    replyText
  }
}

<!-- *** Queries *** -->
<!-- read all users replies -->
query ViewAllReplies {
  viewAllReplies {
    commentId
    replyUserId
    replyUserName
    createdAt
    _id
    replyText
  }
}