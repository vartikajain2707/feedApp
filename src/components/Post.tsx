import moment from 'moment'

type PostProps = {
  post: {
    id: string
    author: {
      id: string
      name: string
      avatar: string
    }
    content: string
    timestamp: string
    likes: number
    comments: number
  }
  onInteraction: () => boolean
}

const Post = ({ post, onInteraction }: PostProps) => {
  const handleInteraction = () => {
    if (onInteraction()) return
    alert('This feature is not implemented yet')
  }

  const formattedTime = moment(post.timestamp).fromNow()

  return (
      <div className="bg-gray-100 rounded-2xl shadow p-2">
        <div className="bg-white p-2 rounded-lg">
          <div className="flex items-center gap-3">
            <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-lg object-cover"
            />
            <div>
              <p className="text-sm font-semibold text-gray-900">{post.author.name}</p>
              <p className="text-xs text-gray-500">{formattedTime}</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4">
            <p className="text-sm text-gray-800 leading-relaxed">
              {post.content}
            </p>
          </div>

        </div>
        <div className="flex justify-start pt-1 gap-6 text-gray-500 text-sm">
          <button
              onClick={() => handleInteraction()}
              className="flex items-center hover:text-gray-700 transition"
          >
            <svg className="w-5 h-5 mr-1" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path
                  strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>

          <button
              onClick={() => handleInteraction()}
              className="flex items-center hover:text-gray-700 transition"
          >
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                  strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </button>

          <button
              onClick={() => handleInteraction()}
              className="flex items-center hover:text-gray-700 transition"
          >
            <svg className="w-5 h-5 mr-1" viewBox="0 0 24 24" fill="none">
              <path d="M9 12C9 13.3807 7.88071 14.5 6.5 14.5C5.11929 14.5 4 13.3807 4 12C4 10.6193 5.11929 9.5 6.5 9.5C7.88071 9.5 9 10.6193 9 12Z" stroke="currentColor" strokeWidth="1.5" />
              <path d="M14 6.5L9 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M14 17.5L9 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M19 18.5C19 19.8807 17.8807 21 16.5 21C15.1193 21 14 19.8807 14 18.5C14 17.1193 15.1193 16 16.5 16C17.8807 16 19 17.1193 19 18.5Z" stroke="currentColor" strokeWidth="1.5" />
              <path d="M19 5.5C19 6.88071 17.8807 8 16.5 8C15.1193 8 14 6.88071 14 5.5C14 4.11929 15.1193 3 16.5 3C17.8807 3 19 4.11929 19 5.5Z" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>

        </div>

      </div>
  )
}

export default Post
