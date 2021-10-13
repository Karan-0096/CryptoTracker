const form =document.querySelector('#searchForm');
const res=document.querySelector('#tableRes');
var upd;

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(upd){
        clearTimeout(upd);
    }
    const ctype = form.elements.coinType.value;
    fetchPrice(ctype);
});
// async function
const fetchPrice=async(ctype)=>{
    const r= await axios.get(`https://api.cryptonator.com/api/ticker/${ctype}`);
    const price= r.data.ticker.price;
    const voulme =r.data.ticker.voulme;
    const change=r.data.ticker.change;
    const base=r.data.ticker.base;
    const target=r.data.ticker.target;
    const time=r.data.timestamp;
    res.innerHTML=`<tr>
    <td>
        <strong>Property</strong>
    </td>
    <td>
        <strong>Value</strong>
    </td>
</tr>
<tr>
    <td>
        ${base}
    </td>
    <td>${price} ${target}</td>
</tr>
<tr>
    <td>
        Volume
    </td>
    <td>${voulme}</td>
</tr>
<tr>
    <td>
        Change
    </td>
    <td>${change}</td>
</tr>
<tr>
    <td>
        Last Update
    </td>
    <td>${time}</td>
</tr>`
upd= setTimeout(()=>fetchPrice(ctype),10000);
}