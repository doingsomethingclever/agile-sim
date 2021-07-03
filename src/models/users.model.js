{
    id: {
        type: UUID
    },
    name: {
        type: string
    },
    status: {
        bool
    },
    role: {
        ENUM,
        [SALES, TECH, MANAGEMENT]
    }
}