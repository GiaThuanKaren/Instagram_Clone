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
  replies: any[]
  user: User
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