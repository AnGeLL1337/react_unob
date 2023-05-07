export const SingleLesson = {
    "id": "704e7bc2-b1d6-4fe3-95ce-b008b352dd59",
    "name": "Úvod",
    "lastchange": "2023-04-27T17:22:40.048220"
}
export const PlannedLessonPage = {
    "plannedLessonPage": [
        {
            "id": "704e7bc2-b1d6-4fe3-95ce-b008b352dd59",
            "name": "Úvod",
            "lastchange": "2023-04-27T17:22:40.048220"
        },
        {
            "id": "2042c68d-9b6f-4fce-9c35-d37bb36b4829",
            "name": "Objekty",
            "lastchange": "2023-04-27T17:22:40.051592"
        }
        ]
}

// Lesson Query by ID
 export const fakeQueryLesson = async (id) => ({json: () => {
    const json = JSON.stringify(SingleLesson)
    const result = JSON.parse(json)
    return {'plannedLessonById': {...result, id: id}}
 }})

// Lesson Query Page
export const fakeQueryLessonPage = async () => ({json: () => {
    const json = JSON.stringify(PlannedLessonPage)
    const result = JSON.parse(json)
    return {'plannedLessonPage': result.plannedLessonPage}
 }})
