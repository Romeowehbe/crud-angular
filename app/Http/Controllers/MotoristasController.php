<?php

namespace App\Http\Controllers;

use App\Models\Motorista;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class MotoristasController extends Controller
{
    //Criar motorista

    public function store(Request $request)
    {
        $motorista = Motorista::create($request->all());

        return response($motorista, 201);
    }

    //Listar motorista

    public function show()
    {
        return response()->json(Motorista::all(), 200);
    }

    // Atualizar motorista

    public function edit(Request $request, $id)
    {
        $motorista = Motorista::find($id);
        $motorista->update($request->all());
        return response($motorista, 200);
    }

    // Apagar motorista

    public function destroy($id)
    {
        $motorista = Motorista::find($id);
        $motorista->delete();

        return response()->json(null, 204);
    }
}
