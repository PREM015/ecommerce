'use client';
export default function Error({ error }: {{ error: Error }}) {
    return <div>An error occurred: {{error.message}}</div>;
}
