{
    id: {
        UUID,
    },
    name: {
        sting
    },
    owner: {
        fk_user
    },
    goal: {
        text
    },
    lanes: [
        {
            fk_lane
        },
        {
            fk_lane
        }
    ]
}