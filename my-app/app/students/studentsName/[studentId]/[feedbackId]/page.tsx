import Link from "next/link";

export default function FeedbackIdPage({ params }: { params: { studentId: string; feedbackId:string } }) {
    return (
        <div>
            <h1>FeedbackId Page</h1>
            <p>studentID{params.studentId} and feedbackID {params.feedbackId} for students</p>
            
            
        </div>
    );
}