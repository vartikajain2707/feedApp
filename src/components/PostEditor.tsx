import { useState } from 'react'

type PostEditorProps = {
  onSubmit: (content: string) => void
  onInteraction: () => boolean
}

const PostEditor = ({ onSubmit, onInteraction }: PostEditorProps) => {

  const handleInteraction = () => {
    if (onInteraction()) return
    alert( 'This feature is not implemented yet')
  }

  const [content, setContent] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!content.trim()) return
    onSubmit(content)
    setContent('')
  }

  return (
    <div className="bg-gray-100 rounded-lg shadow-md p-2 animate-fade-in">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col w-full p-2 rounded-lg bg-white items-start ">
          <div className="flex justify-between w-full">
            <div className="flex items-center bg-gray-50 rounded-lg p-2 justify-around w-3/5 gap-2 pb-2 text-gray-600 text-sm">
              <select className="rounded border border-gray-300 px-2 py-1" onClick={() =>handleInteraction()}>
                <option>Paragraph</option>
              </select>
              <button title="Bold" onClick={() =>handleInteraction()}>
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                  <path d="M6 4h8a4 4 0 010 8H6zM6 12h9a4 4 0 010 8H6z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <button title="Italic" onClick={() =>handleInteraction()}>
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                  <line x1="19" y1="4" x2="10" y2="4" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="14" y1="20" x2="5" y2="20" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="15" y1="4" x2="9" y2="20" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <button title="Underline" onClick={() =>handleInteraction()}>
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                  <path d="M6 4v6a6 6 0 0012 0V4M4 20h16" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <button title="Bullet List" onClick={() =>handleInteraction()}>
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                  <line x1="8" y1="6" x2="21" y2="6" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="8" y1="12" x2="21" y2="12" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="8" y1="18" x2="21" y2="18" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="4" cy="6" r="1.5" />
                  <circle cx="4" cy="12" r="1.5" />
                  <circle cx="4" cy="18" r="1.5" />
                </svg>
              </button>

              <button title="Numbered List" onClick={() =>handleInteraction()}>
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                  <path d="M8 6h13M8 12h13M8 18h13" strokeLinecap="round" strokeLinejoin="round" />
                  <text x="3" y="7" fontSize="6" fill="currentColor">1</text>
                  <text x="3" y="13" fontSize="6" fill="currentColor">2</text>
                  <text x="3" y="19" fontSize="6" fill="currentColor">3</text>
                </svg>
              </button>

              <button title="Code" onClick={() =>handleInteraction()}>
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                  <polyline points="16 18 22 12 16 6" strokeLinecap="round" strokeLinejoin="round" />
                  <polyline points="8 6 2 12 8 18" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
          </div>
            <div>
            <button
                title="Delete"
                className="ml-auto rounded-md bg-red-100 p-1.5 text-red-500 hover:bg-red-200"
                onClick={() =>handleInteraction()}
            >
              <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
              >
                <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M1 7h22M10 3h4a1 1 0 011 1v1H9V4a1 1 0 011-1z" />
              </svg>
            </button>
          </div>
          </div>
          <div className="flex-grow w-full flex items-start p-2.5">
            <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM8.39747 15.5534C8.64413 15.2206 9.11385 15.1508 9.44661 15.3975C10.175 15.9373 11.0541 16.25 12 16.25C12.9459 16.25 13.825 15.9373 14.5534 15.3975C14.8862 15.1508 15.3559 15.2206 15.6025 15.5534C15.8492 15.8862 15.7794 16.3559 15.4466 16.6025C14.4742 17.3233 13.285 17.75 12 17.75C10.715 17.75 9.5258 17.3233 8.55339 16.6025C8.22062 16.3559 8.15082 15.8862 8.39747 15.5534Z" fill="#1C274C"></path> <path d="M16 10.5C16 11.3284 15.5523 12 15 12C14.4477 12 14 11.3284 14 10.5C14 9.67157 14.4477 9 15 9C15.5523 9 16 9.67157 16 10.5Z" fill="#1C274C"></path> <path d="M10 10.5C10 11.3284 9.55229 12 9 12C8.44772 12 8 11.3284 8 10.5C8 9.67157 8.44772 9 9 9C9.55229 9 10 9.67157 10 10.5Z" fill="#1C274C"></path> </g></svg>
            <textarea
                className="ml-1 pl-1 w-3/5 text-gray-900 focus:outline-none focus:ring-0 focus:border-transparent"
              placeholder="How are you feeling today?"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={4}
            />
          </div>
        </div>
        <div className="mt-3 flex w-full">
          <div className="mt-2 flex w-full items-center justify-between px-1 text-gray-500">
            <div className="flex items-center gap-3 ">
              <button className="p-1 rounded-full hover:bg-gray-100" onClick={() =>handleInteraction()}>
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M12 6V18" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
              </button>

              <button className="p-1 rounded-full hover:bg-gray-100" onClick={() =>handleInteraction()}>
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M14.75 7.33303V11.222C14.7728 12.4877 13.7657 13.5325 12.5 13.556C11.2343 13.5325 10.2271 12.4877 10.25 11.222V7.33303C10.2277 6.06772 11.2347 5.02357 12.5 5.00003C13.7653 5.02357 14.7723 6.06772 14.75 7.33303Z" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M8.46233 13.8534C8.13618 13.5981 7.66478 13.6555 7.40945 13.9817C7.15411 14.3078 7.21152 14.7792 7.53767 15.0346L8.46233 13.8534ZM17.4623 15.0346C17.7885 14.7792 17.8459 14.3078 17.5906 13.9817C17.3352 13.6555 16.8638 13.5981 16.5377 13.8534L17.4623 15.0346ZM13.25 16C13.25 15.5858 12.9142 15.25 12.5 15.25C12.0858 15.25 11.75 15.5858 11.75 16H13.25ZM11.75 19C11.75 19.4142 12.0858 19.75 12.5 19.75C12.9142 19.75 13.25 19.4142 13.25 19H11.75ZM7.53767 15.0346C10.4524 17.3164 14.5476 17.3164 17.4623 15.0346L16.5377 13.8534C14.1661 15.7101 10.8339 15.7101 8.46233 13.8534L7.53767 15.0346ZM11.75 16V19H13.25V16H11.75Z" fill="#000000"></path> </g></svg>
              </button>

              <button className="p-1 rounded-full hover:bg-gray-100" onClick={() =>handleInteraction()}>
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 10L18.5768 8.45392C19.3699 7.97803 19.7665 7.74009 20.0928 7.77051C20.3773 7.79703 20.6369 7.944 20.806 8.17433C21 8.43848 21 8.90095 21 9.8259V14.1741C21 15.099 21 15.5615 20.806 15.8257C20.6369 16.056 20.3773 16.203 20.0928 16.2295C19.7665 16.2599 19.3699 16.022 18.5768 15.5461L16 14M6.2 18H12.8C13.9201 18 14.4802 18 14.908 17.782C15.2843 17.5903 15.5903 17.2843 15.782 16.908C16 16.4802 16 15.9201 16 14.8V9.2C16 8.0799 16 7.51984 15.782 7.09202C15.5903 6.71569 15.2843 6.40973 14.908 6.21799C14.4802 6 13.9201 6 12.8 6H6.2C5.0799 6 4.51984 6 4.09202 6.21799C3.71569 6.40973 3.40973 6.71569 3.21799 7.09202C3 7.51984 3 8.07989 3 9.2V14.8C3 15.9201 3 16.4802 3.21799 16.908C3.40973 17.2843 3.71569 17.5903 4.09202 17.782C4.51984 18 5.07989 18 6.2 18Z" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
              </button>
            </div>

            <button type={"submit"} disabled={!content.trim()} className="outline-none p-1 cursor-pointer rounded-full hover:bg-gray-100">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="blue" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11.5003 12H5.41872M5.24634 12.7972L4.24158 15.7986C3.69128 17.4424 3.41613 18.2643 3.61359 18.7704C3.78506 19.21 4.15335 19.5432 4.6078 19.6701C5.13111 19.8161 5.92151 19.4604 7.50231 18.7491L17.6367 14.1886C19.1797 13.4942 19.9512 13.1471 20.1896 12.6648C20.3968 12.2458 20.3968 11.7541 20.1896 11.3351C19.9512 10.8529 19.1797 10.5057 17.6367 9.81135L7.48483 5.24303C5.90879 4.53382 5.12078 4.17921 4.59799 4.32468C4.14397 4.45101 3.77572 4.78336 3.60365 5.22209C3.40551 5.72728 3.67772 6.54741 4.22215 8.18767L5.24829 11.2793C5.34179 11.561 5.38855 11.7019 5.407 11.8459C5.42338 11.9738 5.42321 12.1032 5.40651 12.231C5.38768 12.375 5.34057 12.5157 5.24634 12.7972Z" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default PostEditor