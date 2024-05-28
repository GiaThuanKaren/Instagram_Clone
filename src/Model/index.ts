export interface ImagePost {
  url: string;
}

export interface PeopleSearched { }


export interface ResponeModel<T> {
  status: number
  msg: string
  data: T
  otherdata: any
}





export interface CreateNewPostModel {
  contend: string
  images: string[]
  userId: string
}




export interface PostWithUserModel {
  id: string
  contend: string
  images: string[]
  userId: string
  reaction: any[]
  user?: User
}

export interface User {
  id: string
  name: string
  email: string
  emailVerified: any
  image: string
  following: any[]
}


export interface CommentFromIdPost {
  id: string
  content: string
  userId: string
  postid: string
  parentid: string
  replies: string[]
  user: User
}




export interface ConversationListMessage {
  id: string
  message: string
  targetUserId: string
  fromUserId: string
  conversationId: string
  createdAt: string
  UserFrom: UserFrom
  UserSend: UserSend
}

export interface UserFrom {
  id: string
  name: string
  email: string
  emailVerified: any
  image: string
  following: any[]
  follower: any[]
  conversationIds: any[]
}

export interface UserSend {
  id: string
  name: string
  email: string
  emailVerified: any
  image: string
  following: any[]
  follower: any[]
  conversationIds: any[]
}


export interface CloudinaryRespone {
  asset_id: string
  public_id: string
  api_key: string
  version: number
  version_id: string
  signature: string
  width: number
  height: number
  format: string
  resource_type: string
  created_at: string
  tags: any[]
  pages: number
  bytes: number
  type: string
  etag: string
  placeholder: boolean
  url: string
  secure_url: string
  access_mode: string
  original_filename: string
}



// export interface PostHome {
//   _id: string
//   title: string
//   descripttion: string
//   media: string[]
//   authorid: string
//   reaction: string[]
//   createdAt: string
//   updatedAt: string
//   __v: number
//   author: Author[]
// }

// export interface CommentInf {
//   _id: string
//   content: string
//   parentCommentID: string
//   postId: string
//   authorId: string
//   replies: string[]

//   author: Author[]
// }

// export interface Author {
//   _id: string
//   name: string
//   email: string
//   email_verified: any
//   image: string
// }