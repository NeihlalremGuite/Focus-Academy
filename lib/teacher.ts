export const isTeacher = (userId?: string | null) => {
    return (
        userId === process.env.NEXT_PUBLIC_TEACHER_ID ||
        userId === process.env.NEXT_PUBLIC_TEACHER_ID_2 ||
        userId === process.env.NEXT_PUBLIC_TEACHER_ID_3 ||
        userId === process.env.NEXT_PUBLIC_TEACHER_ID_4
        );
}