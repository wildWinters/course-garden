import { Button } from "@/shared/shad-cn/ui/button"


export function EditCourseHeading() {
  return ( 
    <div className="flex items-center gap-[16px]">
        <span>Edit Course</span>  

        <Button>Languages</Button>
        <span>|</span>
        <span>Edit</span>
        <span>View</span>
    </div>
  )
}