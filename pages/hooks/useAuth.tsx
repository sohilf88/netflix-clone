import {createUserWithEmailAndPassword,signInWithEmailAndPassword,User,signOut,onAuthStateChanged} from 'firebase/auth';
import {useState,useEffect,useMemo,createContext,useContext} from "react";
import {useRouter} from 'next/router';
import { auth } from '../firebase';

interface IAuth {
  user: User | null
  signUp: (email: string, password: string) => Promise<void>
  signIn: (email: string, password: string) => Promise<void>
  logOut: () => Promise<void>
  error: string | null
  loading: boolean
}

interface AuthProviderProps {
  children: React.ReactNode
}


const AuthContext = createContext<IAuth>({
  user: null,
  signUp: async () => {},
  signIn: async () => {},
  logOut: async () => {},
  error: null,
  loading: false,
})




export const AuthProvider = ({children}:AuthProviderProps) => {
  const router=useRouter();
  const [user,setUser]=useState<User | null>(null)
  const [loading,setLoading]=useState(false)
  const [error,setError]=useState('')
  const [initialLoading,setInitialLoading]=useState(true)

  //SignUP Functions start
  const signUp=async(email:string,password:string)=>{
      setLoading(true)
      await createUserWithEmailAndPassword(auth,email,password).then((UserCredential)=>{
        setUser(UserCredential.user)
        router.push("/")
        setLoading(false)
      }).catch((error)=>alert(error.message)).finally(()=>setLoading(false))
      
  }
  //SignUP Functions ends

// Signin Function start
  const signIn =async(email:string,password:string)=>{
      setLoading(true)
      await signInWithEmailAndPassword(auth, email, password).then((UserCredential)=>{
      setUser(UserCredential.user)
      router.push("/")
      setLoading(false)
    }).catch((error)=>alert(error.message)).finally(()=>setLoading(false))
    
  }
  // Signin Function end

  //logout Function start
  const logOut=async()=>{
    setLoading(true);
    signOut(auth).then(()=>{
      setUser(null);  
    }).catch((error) => alert(error.message))
      .finally(() => setLoading(false))
   //logout Function end

  }

  onAuthStateChanged(auth, (user) => {
  if (user) {
    setUser(user);
    setLoading(false)
  } else {
    setUser(null);
    setLoading(true)
     router.push("/login") 
  }
  setInitialLoading(false)
});

 const memoedValue = useMemo(
    () => ({ user, signUp, signIn, error, loading, logOut }),
    [user, loading, error]
  )

  return <AuthContext.Provider value={memoedValue} >
    {!initialLoading && children}
  </AuthContext.Provider>
    
  
}


export default function useAuth(){
 return useContext(AuthContext)
}


