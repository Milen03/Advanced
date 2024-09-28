function area() { 

    return Math.abs(this.x * this.y); 
    
    }
    function vol() { 

        return Math.abs(this.x * this.y * this.z); 
        
        }
        function solve(area, vol, input) {
            let boxes=JSON.parse(input)

            const resuld= boxes.map((box)=>({
                area:area.call(box),
                value:vol.call(box)
            }))


           return resuld
           

        }
        solve(area, vol, `[{"x":"1","y":"2","z":"10"},{"x":"7","y":"7","z":"10"},{"x":"5","y":"2","z":"10"}]`)

