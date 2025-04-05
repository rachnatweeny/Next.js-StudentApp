import Link from "next/link";

export default function StudentId({ params }: { params: { studentId: string } }) {
    return (
        <div>
            <h1>Student ID: {params.studentId}</h1>
            <Link href="/students/studentsName/studentId/feedbackId">Students ID</Link>
        </div>
    );
}