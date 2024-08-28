import { classnames } from '@/utils/classnames'

interface Props {
  className?: string
}

function Spinner({ className }: Props) {
  return (
    <div
      className={classnames(
        'aspect-square animate-spin rounded-full border-2 border-sunglow border-r-black',
        className,
      )}
    />
  )
}

export default Spinner
