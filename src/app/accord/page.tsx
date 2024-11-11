import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


const AccordPage = () => {
    const FaqData = [
        {
            id: 1,
            title: "What is Next.js?",
            content: "Next.js is a React framework that enables server-side rendering and generates static websites for React-based web applications. It allows for improved performance, SEO optimization, and file-based routing."
        },
        {
            id: 2,
            title: "How does Context API work?",
            content: "The Context API in React allows you to pass data through the component tree without having to manually pass props at every level. It's especially useful for managing global state across your application."
        },
        {
            id: 3,
            title: "What is Tailwind CSS?",
            content: "Tailwind CSS is a utility-first CSS framework that allows you to design directly in your markup. It provides low-level utility classes that make it easy to build responsive designs without writing custom CSS."
        }
    ];

    return (
        <div className="flex justify-center items-center h-full">
            <main className="w-[500px] p-4">
                <Accordion type="multiple" >
                    {FaqData.map((faq) => (
                        <AccordionItem key={faq.id} value={`${faq.id}`}>
                            <AccordionTrigger>{faq.title}</AccordionTrigger>
                            <AccordionContent>
                                {faq.content}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </main>

        </div>

    )
}

export default AccordPage
