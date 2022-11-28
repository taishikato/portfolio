import {Badge} from '@mantine/core'

const MyWorkSingle = ({work}) => {
  return (
    <div className="p-3 border rounded-lg border-slate-50">
      <a href={work.link} target="_blank" className="text-slate-100">
        <div className="font-semibold text-medium">{work.name}</div>
        <div>{work.description}</div>
        <div className="flex mt-1 gap-x-3">
          {work.tags.map((tag, index) => {
            return (
              <Badge key={index} color={tag.color} variant="filled">
                {tag.title}
              </Badge>
            )
          })}
        </div>
      </a>
    </div>
  )
}

export default MyWorkSingle
