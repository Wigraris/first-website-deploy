export default function Stack(){
    const skills = [
        'Python — anemia detect project',
        'TypeScript — mini projects',
        'React — hooks, routing, components',
        'Tailwind CSS — styling',
    ]
    return (<div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-white">
        <h1 className="text-3xl font-bold mb-8">Мой стек</h1>
        <div className="flex flex-col gap-4 w-full max-w-md px-4"> {skills.map((skill,index) => (<div key ={index} className="border border-gray-700 rounded-lg p-4 hover:border-blue-500"><p>{skill}</p></div>))}</div>
    </div>)
}