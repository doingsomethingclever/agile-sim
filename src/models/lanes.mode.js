{
    name: {
        type: string,
    },
    id: {
        type: UUID
    },
    mappedStatus: {
        type: ENUM,
        values: [TODO, IN_PROGESS ...]
    },
    auditFields: {
        type: date
    }
}