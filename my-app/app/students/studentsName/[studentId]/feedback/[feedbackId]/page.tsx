export default function FeedbackPage({params}:{params:{feedbackId: string; studentId:string;}}) {
    return (
        <div>
            <h1>feedback {params.feedbackId} for student {params.studentId}</h1>
            
        </div>
    );
}