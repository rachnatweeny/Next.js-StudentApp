import Link from "next/link";

export default function FeedbackIdPage({ params }: { params: { studentId: string; feedbackId:string } }) {
    return (
        <div>
            <h1>Feedback Page</h1>
            <p>studentID{params.studentId} and feedbackID {params.feedbackId} for students</p>
            
            {/* <Link href="/students/studentsName/studentId/feedbackId"> students feedback for particular ID</Link> */}
        </div>
    );
}