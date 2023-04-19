export interface ImagePost {
  url: string;
}

export interface PeopleSearched { }

export interface PostHome {
  _id: string
  title: string
  descripttion: string
  media: string[]
  authorid: string
  reaction: string[]
  createdAt: string
  updatedAt: string
  __v: number
  author: Author[]
}

export interface Author {
  _id: string
  name: string
  email: string
  email_verified: any
  image: string
}
