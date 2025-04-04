export default function StudentId({ params }: { params: { studentId: string } }) {
    return (
        <div>
            <h1>Student ID: {params.studentId}</h1>
        </div>
    );
}