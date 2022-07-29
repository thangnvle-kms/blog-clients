import { useState, useEffect } from 'react'

import ListBlogComponent from '../list-blog/ListBlogComponent';
import RightMenuComponent from '../menu/RightMenuComponent';
import { getCategory } from '../../service/service';
import './ContentStyle.css';

function ContentComponent() {
    
    const [category, setCategory] = useState<[]>([]);

    async function getValue() {
        const data = await getCategory();
        setCategory(data);
    }

    useEffect(() => {
        getValue()
    }, []);

    return (
        <div>
            <div className="row">
                <div className="left-column">
                    <ListBlogComponent />
                </div>
                <RightMenuComponent data={category} />
            </div>
        </div>
    )
}

export default ContentComponent;