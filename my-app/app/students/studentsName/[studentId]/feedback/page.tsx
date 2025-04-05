import Link from "next/link";

export default function FeedbackPage() {
    return (
        <div>
            <h1>Student Feedback</h1>
            <p>This is the feedback page for a specific student.</p>
            <Link href="/feedbackId">Students ID</Link>
        </div>
    );
}