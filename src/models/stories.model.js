{
    id: {
        UUID
    },
    name: {
        string
    },
    status: {
        fk_status, id, TODO
    },
    storyPoints: {
        int,
    },
    description: {
        stirng
    },
    createdBy: {
        UUID, fk_users
    },
    assignedTo: {
        UUID, fk_users, null
    },
    tags: {
        relation to tags master, 
        string, NULL
    },
    auditFields: {
        Date
    },
    priority: { 
        ENUM,
        fk_priority, MED
    },
    sprint: [
        relationship, 
        [fk_sprints, backlog]
    ]
}