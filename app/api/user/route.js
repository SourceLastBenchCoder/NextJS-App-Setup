export async function GET(request){

    const users=[
        {id:1,name:"chakrapani upadhyaya",dob:"24-Februry-1987",school:"SRCJC School Sandur"},
        {id:1,name:"swapna y v",dob:"28-August-1991",school:"Wadla School Bellary"},
        {id:1,name:"shraddha upadhyaya",dob:"18-June-2015",school:"Sri Chaitanya Techno School"},
        {id:1,name:"shreshta upadhyaya",dob:"13-Nov-2018",school:"Sri Chaitanya Techno School"}
    ]

    return new Response(JSON.stringify(users));
}