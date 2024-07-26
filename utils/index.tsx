import { urlForImage } from "@/sanity/lib/image"
import Image from "next/image"
import { FormEvent } from "react"

export const useFormReset = () => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    e.currentTarget.reset()
  }

  return onSubmit
}

export const blockImageRenderer = {
  types: {
    image: (props: any) => {
      const imageData = props.value
      return (
        <Image
          width={1920}
          height={1080}
          src={urlForImage(imageData)}
          alt={imageData.alt}
        />
      )
    },
    customImage: (props: any) => {
      const imageData = props.value
      return (
        <Image
          width={1920}
          height={1080}
          src={urlForImage(imageData)}
          alt={imageData.alt}
        />
      )
    },
  },
}
