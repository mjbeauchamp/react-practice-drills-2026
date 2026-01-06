import { useEffect, useState } from "react";
import { getData } from "../../data/recursiveJsxData";




export default function RecursiveJsxAssembly() {
    


}









// WORKING SOLUTION BELOW:

















// IMPORTANT: If a helper function doesn’t rely on state, props, or anything in the component closure, 
// it’s best practice to define it outside the component.
// EXCEPTIONS: very small, simple functions can live inside the component closure
// function RenderNodes({nodeList}) {
//     return (
//         <>
//             {nodeList.map(node => <RenderNode key={node.id} node={node} />)}
//         </>
//     )
// }

// function RenderNode({node}) {
//     switch (node.type) {
//         // IMPORTANT: If you want to declare variables inside a case, you need to use a block { ... } to create a new scope.
//         case 'heading': {
//             // IMPORTANT: You can create valid dynamic HTML/JSX elements in React in this way
//             // Just make sure that the variable name starts with an uppercase letter so React interprets it right
//             const HeadingTag = `h${node.attrs?.level || 1}`

//             return (
//                 <HeadingTag>
//                 {node.children && <RenderNodes nodeList={node.children} />}
//                 </HeadingTag>
//             )
//         }

//         case 'text':
//         return <span>{node.value}</span>

//         case 'unordered-list':
//         return (
//             <ul>
//             {node.children && <RenderNodes nodeList={node.children} />}
//             </ul>
//         )

//         case 'list-item':
//         return (
//             <li>
//             {node.children && <RenderNodes nodeList={node.children} />}
//             </li>
//         )

//         case 'image':
//         return (
//             <img
//             src={node.attrs.src}
//             alt={node.attrs.alt || ''}
//             width={node.attrs.width}
//             height={node.attrs.height}
//             />
//         )

//         default:
//         return null
//     }
// }

// export default function RecursiveJsxAssembly() {
//     const [nodeList, setNodeList] = useState([]);

//     useEffect(() => {
//        const fetchData = async () => {
//             try {
//                 const jsxData = await getData();
//                 if (!jsxData || !Array.isArray(jsxData)) return;

//                 // IMPORTANT: It's best practice to NOT store JSX itself in state, so we're not doing the initial
//                 // <RenderNodes /> recursion kickoff here. We do it in the JSX itself.
//                 // It's always best to store just data in state, and then do JSX in the JSX code section.
//                 setNodeList(jsxData)
//             } catch (err) {
//                 console.error('ERROR GETTING DATA:', err)
//             }
//        }

//        fetchData();
//     }, [])

//     return (
//         <>
//             {/* 
//                 IMPORTANT: This RenderNodes component is where we're kicking off the 
//                 recursive rendering process. So basically with JSX you can build JSX code up 
//                 recursively just by rendering components within components, rather than calling
//                 a 'traditional' recursive function
//             */}
//             {nodeList.length > 0 && <RenderNodes nodeList={nodeList} />}
//         </>
//     )
// }