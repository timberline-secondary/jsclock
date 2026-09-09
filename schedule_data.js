const scheduleStr = `
[
    {
        "description": "4-Block Semester Schedule.",
        "days": [1,2,4,5],
        "values": [
            {
                "text": "Start of the day",
                "colour": "239, 52, 24",
                "start": "00:00",
                "end": "08:50",
                "type": "Break"
            },
            {
                "text": "A Block",
                "colour": "default",
                "start": "08:50",
                "end": "10:10",
                "type": "Block"
            },
            {
                "text": "Go to B Block Class",
                "colour": "239, 52, 24",
                "start": "10:10",
                "end": "10:20",
                "type": "Transition"
            },
            {
                "text": "B Block",
                "colour": "default",
                "start": "10:20",
                "end": "11:35",
                "type": "Block"
            },
            {
                "text": "Lunch",
                "colour": "239, 52, 24",
                "start": "11:35",
                "end": "12:10",
                "type": "Lunch"
            },
            {
                "text": "Go to C Block Class",
                "colour": "239, 52, 24",
                "start": "12:10",
                "end": "12:15",
                "type": "Transition"
            },
            {
                "text": "C Block",
                "colour": "default",
                "start": "12:15",
                "end": "13:35",
                "type": "Block"
            },
            {
                "text": "Go to D Block Class",
                "colour": "239, 52, 24",
                "start": "13:35",
                "end": "13:45",
                "type": "Transition"
            },
            {
                "text": "D Block",
                "colour": "default",
                "start": "13:45",
                "end": "15:00",
                "type": "Block"
            },
            {
                "text": "School is Over",
                "colour": "239, 52, 24",
                "start": "15:00",
                "end": "08:50",
                "type": "Break"
            }
        ] 
    },
    {
        "description": "2026/2027 Flex schedule with 4-Block system.",
        "days":[3],
        "values": [
            {
                "text": "Start of the day",
                "colour": "239, 52, 24",
                "start": "00:00",
                "end": "08:50",
                "type": "Break"
            },
            {
                "text": "Flex Time",
                "colour": "255, 255, 102",
                "start": "08:50",
                "end": "09:35",
                "type": "Block"
            },
            {
                "text": "A or B Block",
                "colour": "default",
                "start": "09:35",
                "end": "10:30",
                "type": "Block"
            },
            {
                "text": "Break",
                "colour": "239, 52, 24",
                "start": "10:30",
                "end": "10:40",
                "type": "Break"
            },
            {
                "text": "B or A Block",
                "colour": "default",
                "start": "10:40",
                "end": "11:35",
                "type": "Block"
            },
            {
                "text": "Lunch",
                "colour": "239, 52, 24",
                "start": "11:35",
                "end": "12:10",
                "type": "Lunch"
            },
            {
                "text": "Go to C or D Block",
                "colour": "239, 52, 24",
                "start": "12:10",
                "end": "12:15",
                "type": "Transition"
            },
            {
                "text": "C or D Block",
                "colour": "default",
                "start": "12:15",
                "end": "13:10",
                "type": "Block"
            },
            {
                "text": "Break",
                "colour": "239, 52, 24",
                "start": "13:10",
                "end": "13:20",
                "type": "Break"
            },
            {
                "text": "D or C Block",
                "colour": "default",
                "start": "13:20",
                "end": "14:15",
                "type": "Block"
            },
            {
                "text": "Flex Time",
                "colour": "255, 255, 102",
                "start": "14:15",
                "end": "15:00",
                "type": "Block"
            },
            {
                "text": "School is Over",
                "colour": "239, 52, 24",
                "start": "15:00",
                "end": "08:50",
                "type": "Break"
            }
        ]
    },
    {
        "description": "Weekend.",
        "days":[0,6],
        "values": [
            {
                "text": "Weekend",
                "colour": "239, 52, 24",
                "start": "00:00",
                "end": "00:00",
                "type": "Break"
            }
        ]
    }
]
`
