"use client";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

const QuoteCard = ({quote}) => {
  const {data: session} = useSession();
  const pathName = usePathname();
  return (
    <div className="quote_card">
      <div>
        <p className="my-4 font-satoshi text-xl font text-gray-700">{quote.text}</p>
          <div className="flex flex-col items-end">
            <h3 className="font-satoshi font-semibold text-gray-900">
              -{quote.author}
            </h3>
          </div>
      </div>
      <p 
        className="font-inter text-sm blue_gradient cursor-pointer" 
        onClick={() => {handleTagClick && handleTagClick(quote.tag)}}
      >
        {quote.tag}
      </p>
      <div className="flex justify-between items-start gap-5 mt-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          <Image 
            src={quote.creator?.image}
            alt="user image"
            width={30}
            height={30}
            className="rounded-full object-contain"
          />
          <div className="flex flex-col">
            <h3 className="font-satoshi font-normal text-gray-600">
              {quote.creator?.username}
            </h3>
          </div>
        </div>
      </div>
      {session?.user.id===quote.creator._id && pathName==='/profile' && (
        <div className="mt-5  flex-center gap-4 border-t border-gray-100 pt-3">
          <p 
            className="font-inter text-sm green_gradient cursor-pointer" 
            onClick={handleEdit}
          >
            Edit
          </p>
          <p 
            className="font-inter text-sm orange_gradient cursor-pointer"
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  )
}
export default QuoteCard