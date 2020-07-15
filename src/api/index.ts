export type JobData = {
    absolute_url: string
    id: number
    internal_job_id: number
    location?: {
        name: string
    }
    updated_at: string
    title: string
    content?: string
}

async function get<T>(request: RequestInfo): Promise<T> {
    const response = await fetch(request)
    const body = await response.json()

    return body
}

export function getPosts() {
    return get<{
        jobs: JobData[]
    }>("https://boards-api.greenhouse.io/v1/boards/pinterest/jobs").then(
        (data) => data.jobs
    )
}

export function getPost(id: string) {
    return get<JobData>(
        `https://boards-api.greenhouse.io/v1/boards/pinterest/jobs/${id}`
    )
}
