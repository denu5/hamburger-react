import React from 'react'

export default ({
  name,
  initial,
  type,
  smallType = '',
}: {
  name: string
  initial: string
  type: string
  smallType?: string
}) => (
  <div
    className={`
    flex
    mb-2
    sm:mb-0
    items-center
    sm:h-12
  `}
  >
    <div className="flex">
      <div
        className="
        border-b-2
        border-t-2
        border-l-2
        bg-purple-900
        border-purple-600
        rounded
        h-8
        sm:h-10
        flex
        items-center
        justify-center
        w-24
        sm:w-32
        text-sm
        md:text-base
        rounded-tr-none
        rounded-br-none
        font-medium
        border-solid
      "
      >
        {name}
      </div>
      <div
        className="
        border-2
        rounded-tl-none
        rounded-bl-none
        border-purple-600
        rounded
        text-xs
        h-8
        sm:h-10
        flex
        items-center
        justify-center
        text-center
        sm:mr-6
        w-24
        border-solid
      "
      >
        {initial}
      </div>
    </div>
    <div className="flex items-baseline flex-grow justify-end">
      <div className="hidden sm:block font-medium text-gray-500 mr-2">
        Type:
      </div>
      <div
        className={`
        ${smallType && 'hidden'}
        ${smallType && 'sm:block'}
        font-medium
        sm:text-lg
      `}
      >
        {type}
      </div>
      {smallType && (
        <div
          className={`
          sm:hidden
          font-medium
          sm:text-lg
        `}
        >
          {smallType}
        </div>
      )}
    </div>
  </div>
)
