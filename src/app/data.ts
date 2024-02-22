export const relations:any = [
    {
        "key": "FAM_MMF",
        "label": "Same family",
        "fields": [
            { "key": "canInherit", "label": "beneficiary", "type": "bool", "values": [] },
            { "key": "haveHouseholdTax", "label": "haveHouseholdTax", "type": "bool", "values": [] },
            { "key": "test", "label": "haveHouseholdTax", "type": "string", "values": [] }
        ]
    },
    {
        "key": "FAM_EEE",
        "label": "Spouse/Concubine",
        "fields": [
            { "key": "canInherit", "label": "beneficiary", "type": "bool", "values": [] },
            { "key": "haveHouseholdTax", "label": "haveHouseholdTax", "type": "bool", "values": [] },
            {
                "key": "maritalStatus", "label": "marital status", "type": "enum", "values": [
                    { "key": "MARRIED", "label": "married" },
                    { "key": "NOT_MARRIED", "label": "union free" }
                ]
            }
        ]
    }
]