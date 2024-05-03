DECLARE
    result          datatype;
    object_variable type_name;
BEGIN
    object_variable := type_name(attribute1, attribute2);
    result := object_variable.method_name(parameters);
END;